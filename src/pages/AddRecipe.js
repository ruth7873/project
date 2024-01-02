// import Test_fieldArray from '../Test_fieldArray'
// import { useFieldArray, useForm } from "react-hook-form"
// import { useLocation, useNavigate } from "react-router-dom"
// import { yupResolver } from "@hookform/resolvers/yup"
// import axios from "axios"
// import * as yup from "yup"
// import 'semantic-ui-css/semantic.min.css'
// import { useSelector, useDispatch } from "react-redux";
// import { FormField, Form } from 'semantic-ui-react'


// export default (prop) => {

//     const schema = yup
//         .object({
//             Name: yup.string().required(),
//             CategoryId: yup.number().required(),
//             Img: yup.string().required(),
//             UserId: yup.number().required(),
//             Duration: yup.number().required(),
//             Difficulty: yup.number().required(),
//             Description: yup.string().required(),
//             Instructions: yup.array().of(yup.object({ Inst: yup.string().required(), })),
//             Ingrident: yup.array().of(yup.object({
//                 Name: yup.string().required(),
//                 Count: yup.number().required(),
//                 Type: yup.string().required(),
//             }))
//         })
//         .required()
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const resipes = useSelector(state => state.recipes);
//     const UserId = useSelector(state => state.user.user?.Id)
//     const { state } = useLocation()
//     const selectRecipe = state;
//     // const Name = state?.Name;
//     // const Img = state?.Img;
//     // const Duration = state?.Duration;
//     // const Difficulty = state?.Difficulty;
//     // const Description = state?.Description;
//     // const CategoryId = state?.CategoryId;
//     // const Id = state?.Id;

//     const {
//         register,
//         control,
//         handleSubmit,
//         formState: { errors }
//     } = useForm({
//         resolver: yupResolver(schema),
//         defaultValues: selectRecipe          
//         }
//     )
//     const { fields: Instructions, append: appendInstructions } = useFieldArray({
//         control, name: "Instructions"
//     });
//     const { fields: Ingrident, append: appendIngridents } = useFieldArray({
//         control, name: "Ingrident"
//     });
//     // Ingrident.values=state?.Ingrident;
//     const onSubmit = (data) => {
//         {
//             console.log("submit:", data);
//             if (selectRecipe == null) {
//                 console.log("selectedrecipe:", selectRecipe);
//                 axios.post('http://localhost:8080/api/recipe', data).then((response) => {
//                     console.log(response);
//                     console.log(data);
//                     dispatch({ type: "ADD_RECIPE", data: data })
//                 })
//                     .catch((error) => {
//                         console.error(error)
//                     })
//             }
//             else {
//                 console.log("xdgfhkjjgszfdgjhkkxd:", selectRecipe);
//                 console.log("data::::::::::", data);
//                 axios.post('http://localhost:8080/api/recipe/edit', { ...data, UserId: selectRecipe?.UserId, Id: selectRecipe?.Id }).then((response) => {
//                     console.log("edit", response);
//                     dispatch({ type: "EDIT_RECIPE", data: response.data })
//                 }).catch((error) => { console.error(error) })
//             }
//         }
//     }
//     return (
//         <>
//             {/* {console.log("state", state)} */}
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <label>Recipe Name: </label>
//                 <input type="text" placeholder="Recipe name"  {...register("Name")} />
//                 <p>{errors.Name?.message}</p>

//                 <label>Description:</label>
//                 <input placeholder="Description" type="text" {...register("Description")} />
//                 <p>{errors.Description?.message}</p>

//                 <label>CategoryId: </label>
//                 <input type="select" placeholder="CategoryId" {...register("CategoryId")} />
//                 <p>{errors.CategoryId?.message}</p>

//                 <label>Img: </label>
//                 <input placeholder="Img URL" {...register("Img")} />
//                 <p>{errors.Img?.message}</p>

//                 <label>Duration: </label>
//                 <input placeholder="Duration" {...register("Duration")} />
//                 <p>{errors.Duration?.message}</p>

//                 <label>Difficulty:</label>
//                 <input placeholder="Difficulty" {...register("Difficulty")} />
//                 <p>{errors.Difficulty?.message}</p>

//                 <div>
//                     <label>Products:</label>
//                     {Ingrident?.map((item, index) => (
//                         <div key={index}>
//                             <input type="text" placeholder="product name:" {...register(`Ingrident[${index}].Name`)} />
//                             <input placeholder="count:" {...register(`Ingrident[${index}].Count`)} />
//                             <input type="text" placeholder="type:" {...register(`Ingrident[${index}].Type`)} />

//                         </div>
//                     ))}
//                 </div>
//                 <button onClick={() => appendIngridents({ Name: "", Count: 0, Type: "" })}>add product</button>

//                 <div>
//                     <label>Instructions:</label>
//                     {Instructions?.map((item, index) => (
//                         <div key={index}>
//                             <input type="text" placeholder="enter Instruction:" {...register(`Instructions.${index}.Inst`)} />

//                         </div>
//                     ))}
//                 </div>
//                 <button onClick={() => appendInstructions({ Inst: "" })}>add Instruction</button>

//                 <input type="submit" />
//             </form>
//         </>
//     );
// }
import Test_fieldArray from '../Test_fieldArray'
import { useFieldArray, useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import * as yup from "yup"
import 'semantic-ui-css/semantic.min.css'
import { useSelector, useDispatch } from "react-redux";
import { FormField, Form } from 'semantic-ui-react'


export default (prop) => {

    const schema = yup
        .object({
            Name: yup.string().required(),
            CategoryId: yup.number().required(),
            Img: yup.string().required(),
            UserId: yup.number().required(),
            Duration: yup.number().required(),
            Difficulty: yup.number().required(),
            Description: yup.string().required(),
            Instructions: yup.array().of(yup.object({ Inst: yup.string().required(), })),
            Ingrident: yup.array().of(yup.object({
                Name: yup.string().required(),
                Count: yup.number().required(),
                Type: yup.string().required(),
            }))
        })
        .required()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const recipes = useSelector(state => state.recipes);
    const UserId = useSelector(state => state.user.user?.Id)
    const { state } = useLocation()
    const selectRecipe = state;
//    // const Name = state?.Name;
//     const Img = state?.Img;
//     const Duration = state?.Duration;
//     const Difficulty = state?.Difficulty;
//     const Description = state?.Description;
//    // const CategoryId = state?.CategoryId;
//     const Ingridentt=state?.Ingrident;
//     const Instructionss=state?.Instructions;
   // const Id = state?.Id;

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
       // defaultValues: { Name:state?.Id, UserId:UserId, CategoryId:state?.CategoryId, Img:state?.Img, Duration:state?.Duration, Difficulty:state?.Difficulty,Description:state?.Description }
       defaultValues:selectRecipe
    })
    const { fields: Instructions, append: appendInstructions } = useFieldArray({
        control, name: "Instructions"
    });
    const { fields: Ingrident, append: appendIngridents } = useFieldArray({
        control, name: "Ingrident"
    });
    const onSubmit = (data) => {
        {
            // console.log(prop)
            
            console.log("submit:", data);
            if (selectRecipe == null) {
                console.log("selectedrecipe:", selectRecipe);
                axios.post('http://localhost:8080/api/recipe', data).then((response) => {
                    console.log(response);
                    console.log(data);
                    dispatch({ type: "ADD_RECIPE", data: data })
                    navigate('/recipe')
                })
                    .catch((error) => {
                        console.error(error)
                    })
            }
            else {
                console.log("xdgfhkjjgszfdgjhkkxd:", selectRecipe);
                console.log("data::::::::::", data);
                axios.post('http://localhost:8080/api/recipe/edit', {...data,UserId:selectRecipe?.UserId,Id:selectRecipe?.Id}).then((response) => {
                    console.log("edit", response);
                    dispatch({ type: "EDIT_RECIPE", data: response.data })
                    navigate('/recipe')
                        
                }).catch((error) => { console.error(error) })

            }
        }
    }
    return (
        <>
            {/* {console.log("state", state)} */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Recipe Name: </label>
                <input type="text" placeholder="Recipe name"  {...register("Name")} />
                <p>{errors.Name?.message}</p>

                <label>Description:</label>
                <input placeholder="Description" type="text" {...register("Description")} />
                <p>{errors.Description?.message}</p>

                <label>CategoryId: </label>
                <input type="select" placeholder="CategoryId" {...register("CategoryId")} />
                <p>{errors.CategoryId?.message}</p>

                <label>Img: </label>
                <input placeholder="Img URL" {...register("Img")} />
                <p>{errors.Img?.message}</p>

                <label>Duration: </label>
                <input placeholder="Duration" {...register("Duration")} />
                <p>{errors.Duration?.message}</p>

                <label>Difficulty:</label>
                <input placeholder="Difficulty" {...register("Difficulty")} />
                <p>{errors.Difficulty?.message}</p>

                <div>
                    <label>Products:</label>
                    {Ingrident?.map((item, index) => (
                        <div key={index}>
                            <input type="text" placeholder="product name:"  {...register(`Ingrident.${index}.Name`)} />
                            <input type="number" placeholder="count:" {...register(`Ingrident.${index}.Count`)} />
                            <input type="text" placeholder="type:" {...register(`Ingrident.${index}.Type`)} />

                        </div>
                    ))}
                </div>
                <button onClick={() => appendIngridents({ Name: "", Count: 0, Type: "" })}>add product</button>

                <div>
                    <label>Instructions:</label>
                    {Instructions?.map((item, index) => (
                        <div key={index}>
                            <input type="text" placeholder="enter Instruction:" {...register(`Instructions.${index}.Inst`)} />

                        </div>
                    ))}
                </div>
                <button onClick={() => appendInstructions({ Inst: "" })}>add Instruction</button>

                <input type="submit" />
            </form>
        </>
    );
}
