const player = {
	name: 'Tina',
	age: 24,
	imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
	imageSize: 100
};

export default function TennisPlayer() {
	return (
		<div className='tennis-player'>
			<h3>Tennis player card</h3>
			<h4>Name {player.name}, age {player.age}</h4>
			<div>
				<img 
					src={player.imageUrl} 
					alt="player img"
					style={{
						width: player.imageSize,
						height: player.imageSize
					}}
				/>
			</div>
		</div>
	);
}