
export default function Pagination({ props }) {

    const { currentPage,
        preSubmitHandler,
        postSubmitHander,
        setCurrentPage, } = props;
    const page = [];

    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        page.push(i)
    }


    return (
        <div className='styles.container'>
            <ul>
                <li onClick={() => preSubmitHandler(currentPage - 1)}>pre</li>
                {page.map(pagenumber => (
                    <li key={pagenumber} onClick={() => setCurrentPage(pagenumber)}>{pagenumber}</li>
                ))}
                <li onClick={() => postSubmitHander(currentPage + 1)}>post</li>
            </ul>
        </div>
    )
};

