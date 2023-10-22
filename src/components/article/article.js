import './article.css'

const Article = ({bgColor, color, label})=>{
    return(
        <div className='article-css' style={{backgroundColor: bgColor, color: color, textTransform: 'uppercase'}}>
            <p>{label}</p>
        </div>
    )
}

Article.defaultProps={
    bgColor: 'rgb(144, 142, 255)',
    color: 'purple'
}

export default Article;