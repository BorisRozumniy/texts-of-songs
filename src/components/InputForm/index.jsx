import React from 'react';
import './style.css';

class InputForm extends React.Component {
	
	render () {

		const { btnText } = this.props;
		// console.log()

		return (
			<div className={btnText === "Search" ? "search test" : "add test"}>
				{btnText === "Add" ?
				<textarea type="text" 
					onChange={this.changeHendler}
					ref={input => this.inputText = input}
					rows="4" 
					cols="50"
				/>
				:
				<input type="text" 
					onChange={this.changeHendler}
					ref={input => this.inputText = input}
				/>
				}
				<button 
					onClick={this.btnHendler}>
					{this.props.btnText}
				</button>
				{/*<input type="button" value={this.props.btnText} onClick={this.btnHendler}/>*/}
	        </div>
		)
	}

	changeHendler = e => {
		if (this.props.btnText === 'Search')
			this.props.hendler(this.inputText.value)
	}

	btnHendler = () => {
		this.props.hendler(this.inputText.value);
		this.inputText.value = ''
	}

}

export default InputForm