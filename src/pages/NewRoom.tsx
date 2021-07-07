import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { database } from "../services/firebase";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";

export function NewRoom() {
	const { user } = useAuth()
	const [newRoom, setNewRoom] = useState('');
	const history = useHistory();

	async function handleNewRoom(event: FormEvent) {
		event.preventDefault();

		if (newRoom.trim() === '') {
			return;
		}

		const roomRef = database.ref('rooms');

		const firebaseRoom = await roomRef.push({
			title: newRoom,
			authorId: user?.id,
		})

		history.push(`{/rooms/${firebaseRoom.key}}`)
		
	}

	return (
		<div id="page-auth">
			<aside>
				<img src={illustrationImg} alt="Illustration Q&amp;A" />
				<strong>Crie salas de Q&amp;A ao vivo</strong>
				<p>Tire as dúvidas da sua audiencia em tempo real</p>
			</aside>
			<main>
				<div className="main-content">
					<img src={logoImg} alt="Letmeask" />
					<h2>Criar uma nova sala</h2>
					<form onSubmit={handleNewRoom}>
						<input
							type="text"
							placeholder="Nome da sala"
							onChange={event => { setNewRoom(event.target.value) }}
							value={newRoom}
						/>

						<Button
							type="submit">
							Criar sala
						</Button>
					</form>
					<p>
						Quer entrar em uma sala existente? <Link to="/">clique Aqui</Link>
					</p>
				</div>
			</main>
		</div>
	);
}
function userAuth(): { user: any; } {
	throw new Error("Function not implemented.");
}

