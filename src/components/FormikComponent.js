
import {Formik, useFormik} from "formik"
export default function FormikComponent(){
    const formik=useFormik({
        initialValues:{
            UserName:'',
            Password:'',
            City:'',
        },
        onSubmit:values => {
            alert(JSON.stringify(values));
        },
    })
    return(
        
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register user</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text"  name="UserName" onChange={formik.handleChange} value={formik.values.UserName} /></dd>

                    <dt>Password</dt>
                    <dd><input  onChange={formik.handleChange} value={formik.values.Password} name="Password" type="text"/></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                            <option>select City</option>
                            <option >Delhi</option>
                            <option >Hyderabad</option>
                            <option >Mumbai</option>
                            <option >Channai</option>
                        </select>
                    </dd>
                    <dd><button type="submit">Submit</button></dd>
                </dl>
                
            </form>
            {/* <h2>User name</h2>
            <dt>{formik.values.UserName}</dt> */}
        </div>
    )

    // const formik = useFormik({
    //     initialValues: {
    //       firstName: '',
    //       lastName: '',
    //       email: '',
    //     },
    //     onSubmit: values => {
    //       alert(JSON.stringify(values, null, 2));
    //     },
    //   });
    //   return (
    //     <form onSubmit={formik.handleSubmit}>
    //       <label htmlFor="firstName">First Name</label>
    //       <input
    //         id="firstName"
    //         name="firstName"
    //         type="text"
    //         onChange={formik.handleChange}
    //         value={formik.values.firstName}
    //       />
    
    //       <label htmlFor="lastName">Last Name</label>
    //       <input
    //         id="lastName"
    //         name="lastName"
    //         type="text"
    //         onChange={formik.handleChange}
    //         value={formik.values.lastName}
    //       />
    
    //       <label htmlFor="email">Email Address</label>
    //       <input
    //         id="email"
    //         name="email"
    //         type="email"
    //         onChange={formik.handleChange}
    //         value={formik.values.email}
    //       />
    
    //       <button type="submit">Submit</button>
    //     </form>
    //   );
}