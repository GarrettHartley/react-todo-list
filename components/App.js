import React, {Component} from 'react'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import ImgAndInfo from './ImgAndInfo'
import s from './App.css'

class App extends Component {
	// sites lina referenced
	// https://english.osu.edu/grad/mfa/faculty
	// http://baltimorereview.org/index.php/summer_2015/contributor/lina-ferreira

	componentWillMount(){
		configureAnchors({offset: -50})
	}

	render() {
		return (
				<div>
					<nav className={s.nav}>
						<ul>
							<li><a href="#about">About</a></li>
							<li><a href="#writings">Writings</a></li>
							<li><a href="#somethingElse">Something Else</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</nav>
					<div className={s.flexContainer}>
						<ScrollableAnchor id={'about'}>
							<div className={s.subPage}>
								<ImgAndInfo
								imgUrl={require('../linaFerreira.jpg')}
								title="Title"
								info="Lina Ferreira was born and raised (mostly) in Bogota, Colombia and has since then been tumbleweeding aimlessly through the world. She is the author of Drown Sever Sing, and her ode to cannibalism can be found in the collection titled, After Montaigne: Contemporary Essayists Cover the Essays. She is a graduate of The University of Iowa’s Creative Nonfiction and Literary Translation programs, and her work has been featured in Arts and Letters, The Chicago Review, and Fourth Genre, among others.  Her new book, Don't Come Back,  is published by Mad River Books, an imprint of The Ohio State University Press (January 2017). Ferreira is a recipient of the 2016 Rona Jaffe Foundation Writer's Award."
								links="links go here"
								infoFirstFlag={true}
								/>
								this is the about stuff
							</div>
						</ScrollableAnchor>

						<ScrollableAnchor id={'writings'}>
							<div className={s.subPage}>
								<ImgAndInfo
										imgUrl={require('../dontComeBack.jpg')}
										title="Don't Come Back"
										info="Don’t Come Back intermixes translations of Spanish adages and adaptations of major Colombian myths with personal essays about growing up amidst violence, magic, and an unyielding Andean sun. Home is place and time and people and language and history, and none of these are ever set in stone. Attempting to reconcile the irreconcilable and translate the untranslatable—to move smoothly and cohesively between culture, language, and place—Ferreira Cabeza-Vanegas is torn between spaces, between the aunt who begs her to return to Colombia and the mother who tells her, “There’s nothing here for you, Lina. Don’t come back.” Don’t Come Back is an exploration of home and identity that constantly asks, “If you really could go back, would you?”"
										links="links go here"
										infoFirstFlag={false}
								/>
								this is the about stuff
							</div>

						</ScrollableAnchor>

						<ScrollableAnchor id={'somethingElse'}>
							<div className={s.subPage}>
								<ImgAndInfo
										imgUrl={require('../linaFerreira.jpg')}
										title="Title"
										info="Lina Ferreira was born and raised (mostly) in Bogota, Colombia and has since then been tumbleweeding aimlessly through the world. She is the author of Drown Sever Sing, and her ode to cannibalism can be found in the collection titled, After Montaigne: Contemporary Essayists Cover the Essays. She is a graduate of The University of Iowa’s Creative Nonfiction and Literary Translation programs, and her work has been featured in Arts and Letters, The Chicago Review, and Fourth Genre, among others.  Her new book, Don't Come Back,  is published by Mad River Books, an imprint of The Ohio State University Press (January 2017). Ferreira is a recipient of the 2016 Rona Jaffe Foundation Writer's Award."
										links="links go here"
										infoFirstFlag={true}
								/>
								some more content?
							</div>
						</ScrollableAnchor>


						<ScrollableAnchor id={'contact'}>
							<div className={s.subPage}>
								<ImgAndInfo
										imgUrl={require('../linaFerreira.jpg')}
										title="Title"
										info="Lina Ferreira was born and raised (mostly) in Bogota, Colombia and has since then been tumbleweeding aimlessly through the world. She is the author of Drown Sever Sing, and her ode to cannibalism can be found in the collection titled, After Montaigne: Contemporary Essayists Cover the Essays. She is a graduate of The University of Iowa’s Creative Nonfiction and Literary Translation programs, and her work has been featured in Arts and Letters, The Chicago Review, and Fourth Genre, among others.  Her new book, Don't Come Back,  is published by Mad River Books, an imprint of The Ohio State University Press (January 2017). Ferreira is a recipient of the 2016 Rona Jaffe Foundation Writer's Award."
										links="links go here"
										infoFirstFlag={true}
								/>
								email and stuff
							</div>
						</ScrollableAnchor>


					</div>
				</div>
		)
	}

}

export default App
