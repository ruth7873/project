import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    Name: yup.string().required("שדה חובה"),
    Count: yup.number("חייב להיות מספר").positive(" חובה מספר חיובי").required("שדה חובה"),
    Type: yup.string().required("שדה חובה"),
    // arr: yup.ArraySchema()
}).required();

export default function App() {

    const prod = {
        Name: "oil",
        Count: "1",
        Type: "cup"
    }
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema),
        values: { arr: ["ssss"] }
        // defaultValues: { firstName: "chavi" },
        // values: { age: 18 }
        // values: add ? {} : prod
    });

    const { fields: fieldsAddres, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "prod_of_recipe", // unique name for your Field Array
    });
    const { fields, } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "arr", // unique name for your Field Array
    });
    const onSubmit = data => console.log(data);
console.log(fieldsAddres)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name: </label>
            <input {...register("Name")} />
            <p>{errors.Name?.message}</p>

            <label>Amount: </label>
            <input {...register("Count")} />
            <p>{errors.Count?.message}</p>

            <label>Type: </label>
            <input {...register("Type")} />
            <p>{errors.Type?.message}</p>


            {fieldsAddres.map((field, index) => (
                <input
                    key={field.id} // important to include key with field's id
                    {...register(`prod_of_recipe.${index}`)}
                />
            ))}
            <button onClick={()=>append("")}>הוספה</button>
            <input type="submit" />
        </form>
    );
}
