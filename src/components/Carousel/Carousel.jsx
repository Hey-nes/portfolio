// Components
import { useState, useEffect } from "react";
import Icon from "components/Icons/Icon";

// Assets
import Music from "assets/Music.jpg";
import Motorcycle from "assets/Motorcycle.jpg";
import Mountain from "assets/Mountain.jpg";

// Styles
import "components/Carousel/Carousel.css";

const images = [
	{ src: Music, alt: "Sebastian playing music" },
	{ src: Motorcycle, alt: "A 1987 Suzuki DR 600 S motorcycle" },
	{ src: Mountain, alt: "Sebastian on a mountain top" },
];

function Carousel() {
	const [loaded, setLoaded] = useState(() => images.map(() => false));
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const nextIndex = (currentIndex + 1) % images.length;
		const img = new Image();
		img.src = images[nextIndex].src;

		img.onload = () =>
			setLoaded((prev) => {
				if (!prev[nextIndex]) {
					const copy = [...prev];
					copy[nextIndex] = true;
					return copy;
				}
				return prev;
			});
	}, [currentIndex]);

	const handleImageLoad = (index) => {
		setLoaded((prev) => {
			const copy = [...prev];
			copy[index] = true;
			return copy;
		});
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="carousel">
			<div className="carousel-inner">
				<div
					className="carousel-track"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{images.map((image, i) => (
						<div className="carousel-slide" key={i}>
							{!loaded[i] && (
								<div className="image-loading">
									<p>Loading...</p>
								</div>
							)}

							<img
								src={image.src}
								alt={image.alt}
								onLoad={() => handleImageLoad(i)}
								style={{ visibility: loaded[i] ? "visible" : "hidden" }}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="carousel-controls hidden-desktop">
				<button
					className="arrow-previous"
					onClick={prevSlide}
					aria-label="Previous image"
				>
					<Icon>
						<path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" />
					</Icon>
				</button>
				<button
					className="arrow-next"
					onClick={nextSlide}
					aria-label="Next image"
				>
					<Icon>
						<path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" />
					</Icon>
				</button>
			</div>
		</div>
	);
}

export default Carousel;
