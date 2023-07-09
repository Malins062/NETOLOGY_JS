export const ProjectList = ({ projects }) => {
    return (
        <>
            <div className='container-image'>
                {
                    projects.map((image, index) => (
                        <img key={index} src={image} />
                    ))
                }
            </div>
        </>
    )
}

export default ProjectList;
