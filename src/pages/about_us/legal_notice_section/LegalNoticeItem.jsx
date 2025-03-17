function LegalNoticeItem({ numbering, content }) {
    return (
        <p className="text-justify text-gray-600">
            <span className="font-bold">{numbering}</span> {content}
        </p>
    );
}

export default LegalNoticeItem;
