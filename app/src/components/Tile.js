import React from 'react'
import { useState } from 'react'

const Tile = ({title, imageLink, postId}) => {

	const [divStyle, setDivStyle] = useState(
		{
			overflow: 'visible',
			cursor: 'pointer'
		}
	);
	const [imgStyle, setImgStyle] = useState(
		{
			width: '100%', 
			height: '17rem', 
			objectFit: 'cover',
			border: '1px solid #3c3d3f',
			filter: 'drop-shadow(0px 0px 0.75rem #000000)'
		}

	);
	const [textStyle, setTextStyle] = useState(
		{
			position: 'relative',
			bottom: '4rem',
			left: '1rem',
			color: '#ffffff',
			textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
		}
	);


	function enterTile() {
		setDivStyle(
			{
				overflow: 'hidden'
			}
		)
	}
	
	function outTile() {
		setDivStyle(
			{
				overflow: 'visible'
			}
		)
	}

	return (
		<div className="Tile" style={divStyle}>
			<img src={imageLink} 
			style={imgStyle}
			onMouseEnter={enterTile}
			onMouseOut={outTile}
			/>
			<h5 style={textStyle}>{title}</h5>
		</div>
	)
}

export default Tile
