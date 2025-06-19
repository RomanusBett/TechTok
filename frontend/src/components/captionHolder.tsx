interface captionHolderProps {
    title: string;
    spanContent: string;
    content: string;
}

const CaptionHolder = ({ title, spanContent, content }: captionHolderProps) => {
    return (
        <div className="homeContainer definitionBox">
            <div className="defChildBox">
                <h1>{title} <span className="startups">{spanContent}</span></h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default CaptionHolder;