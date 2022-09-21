import React from 'react';
//import { Link } from 'react-router-dom';
import './style.css';
//import Modal from '../Modal';

// const toService = () => {
//     .find((cartItem) => cartItem._id === _id)
// }

const PhotoList = () => {
	// 	// const [isModalOpen, setIsModalOpen] = useState(false);
	// 	// const [, setCurrentPhoto] = useState();

	// 	const [photos] = useState([
	// 		{
	// 			name: 'Mongoose Massage',
	// 			description:
	// 				'A 60 minute massage where you get to learn all about MongoDB',
	// 			image: 'mongoosemassage.jpg',
	// 			// category: categories[1]._id,
	// 			price: 20000.0,
	// 			quantity: 500,
	// 		},
	// 		{
	// 			name: 'Express Eyebrow Wax',
	// 			description: 'Efficient and effective eyebrow wax',
	// 			image: 'expresseyebrowwax.jpg',
	// 			// category: categories[1]._id,
	// 			price: 12000.0,
	// 			quantity: 500,
	// 		},
	// 		{
	// 			name: 'React Rejuvenating Facial',
	// 			// category: categories[1]._id,
	// 			description: 'A facial to relax and rejuvenate',
	// 			image: 'reactfacial.jpg',
	// 			price: 10000.0,
	// 			quantity: 500,
	// 		},
	// 		{
	// 			name: 'Node Nails- Manicure',
	// 			// category: categories[1]._id,
	// 			description:
	// 				'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
	// 			image: 'manicure.jpg',
	// 			price: 9000.0,
	// 			quantity: 500,
	// 		},
	// 		{
	// 			name: 'Node Nails- Pedicure',
	// 			// category: categories[1]._id,
	// 			description:
	// 				'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
	// 			image: 'pedicure.jpg',
	// 			price: 9000.0,
	// 			quantity: 500,
	// 		},
	// 	]);

	//const currentPhotos = photos.filter((photo) => photo.category === category);

	// const toggleModal = (image, i) => {
	// 	setCurrentPhoto({ ...image, index: i });
	// 	setIsModalOpen(!isModalOpen);
	// };

	//Carousel Buttons Logic
	var slidePosition = 0;
	SlideShow(slidePosition);

	// // forward/Back controls
	// function plusSlides(n) {
	// 	SlideShow((slidePosition += n));
	// }

	// //  images controls
	// function currentSlide(n) {
	// 	SlideShow((slidePosition = n));
	// }

	// var slidePosition = 1;
	// SlideShow();

	function SlideShow() {
		var i;
		var slides = document.getElementsByClassName('Containers');
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
			slides[slidePosition - 1].style.display = 'block';
		}
		slidePosition++;
		if (slidePosition > slides.length) {
			slidePosition = 1;
		}
		setTimeout(SlideShow, 2000); // Change image every 2 seconds
	}

	return (
		<div>
			<div>
				{/* <!-- Slideshow container --> */}
				<div className="slideshow-container fade">
					{/* <!-- Full images with numbers and message Info --> */}
					<div className="Containers">
							<img
								src={'../Images/mongoosemassage.jpg'}
								style={{ width: '100%' }}
								alt="mongoose massage"
							></img>
						<div className="Info">Mongoose Massage</div>
					</div>
					<div className="Containers">
							<img
								src={'../Images/expresseyebrowwax.jpg'}
								style={{ width: '100%' }}
								alt="express eyebrow wax"
							></img>
						<div className="Info">Express Eyebrow Wax</div>
					</div>
					<div className="Containers">
						<img
							src={'../Images/reactfacial.jpg'}
							style={{ width: '100%' }}
							alt="react facial"
						></img>
						<div className="Info">React Facial</div>
					</div>
					{/* <!-- Back and forward buttons -->
					<Link className="Back" onClick={() => plusSlides(-1)} />
					&#10094;
					<Link className="forward" onClick={() => plusSlides(1)} />
					&#10095; */}
				</div>
				<br />

				{/* <!-- The circles/dots --> */}
				{/* <div style={{ textAlign: 'center' }}>
					<span className="dots" onClick={currentSlide(1)}></span>
					<span className="dots" onClick={currentSlide(2)}></span>
					<span className="dots" onClick={currentSlide(3)}></span>
				</div> */}
				{/* {isModalOpen && (
				<Modal onClose={toggleModal} currentPhoto={currentPhoto} />
			)} */}
			</div>
		</div>
	);
};

export default PhotoList;