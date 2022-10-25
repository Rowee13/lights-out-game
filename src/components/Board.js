import { Component } from "react";
import "./Board.css";
import LightBox from "./LightBox";

class Board extends Component {
	render() {
		return (
			<div>
				<h1>This is the board</h1>
				<LightBox />
			</div>
		);
	}
}

export default Board;
