import React, {Component} from 'react'
import s from './ImgAndInfo.css'

class ImgAndInfo extends Component {

	componentWillMount(){
	}

	renderInfoContainer(){
		let{ title, info, links} = this.props
		return (
				<div className={s.infoContainer}>
					<div className={s.title}>{title}</div>
					<div className={s.info}>{info}</div>
					<div className={s.links}>{links}</div>
				</div>
		)
	}

	render() {
		let {imgUrl, infoFirstFlag} = this.props

		return (
		<div className={s.imgAndInfoContainer}>
			{infoFirstFlag ? this.renderInfoContainer() : null}
			<div className={s.imgContainer}>
			<img src={imgUrl}/>
			</div>
			{!infoFirstFlag ? this.renderInfoContainer() : null}
		</div>
		)
	}

}

export default ImgAndInfo
