import "./write.css"

export default function Write() {
    return (
        <div className='write'>
            <img className="writeImg" src="https://img.freepik.com/free-photo/beautiful-shot-mountains-trees-covered-snow-fog_181624-17590.jpg?w=1380&t=st=1699349435~exp=1699350035~hmac=58de97cef16d430f90058c1ceadd0d63d9bcc132c3aca9b2ff5c99e556cbee6b" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="WriteIcon fa-solid fa-plus"></i>
                    </label>
                    
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
