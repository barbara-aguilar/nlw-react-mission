import copyImg from "../assets/images/copy.svg";

import "../styles/room-code.scss";

export function RoomCode() {
	return (
		<button className="room-code">
			<div>
				<img src={copyImg} alt="Copy code room" />
			</div>
			<span>Sala -Mdy6k2fvXafeWUZqHAw</span>
		</button>
	);
}
