import './form.css';
import { UserContext } from '../../Context/Context';
import { useContext, useRef } from 'react';

function ProfileForm() {
    const ctx = useContext(UserContext);
    const useCtx = ctx.colors;
    const detailctx = ctx.details;
    const setDetailsctx = ctx.setDetails;
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const contactRef = useRef(null);

    const handleSubmit = ((e) => {
        e.preventDefault();
        const inputname = nameRef.current.value;
        const email = emailRef.current.value;
        const contact = contactRef.current.value;
        const newUser = { inputname, email, contact };

        // alert(`Name: ${inputname}, Email: ${email}, Phone: ${contact}`);
    })
    return (
        <div class="formcontainer">
            <h1>CREATE USER</h1>
            <p style={{ color: useCtx.forwordsgreen }}>Create a New User Profile</p>
            {console.log(detailctx)}
            <form onSubmit={handleSubmit}>
            <div>
                    <input type="text" ref={nameRef} required placeholder="FullName" name="firstname" style={{ color: 'black' }} />
                    <input type="email" ref={emailRef} required placeholder='Email' />
                    <input type="number" ref={contactRef} required placeholder='Contact Number' />
                <input type="text" required placeholder='Address' />
                <div class="name"> 
                    <input type="date" required placeholder=""  />
                    <input type="number" required placeholder="Age"/>
                </div>
            </div>
            <button className='btn' type="submit">Create New User</button>
            </form>
        </div>
    )
}
export default ProfileForm;