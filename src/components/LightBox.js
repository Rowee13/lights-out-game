import { Component } from "react";
import "./LightBox.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

class LightBox extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(evt) {
		// call up to the board to flip boxes around this lightbox
		this.props.flipLightBoxAroundMe();
	}

	render() {
		let classes = "LightBox" + (this.props.isLit ? " LightBox-lit" : "");

		return <td className={classes} onClick={this.handleClick} />;
	}
}

export default LightBox;
