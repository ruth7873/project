import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
    title: yup.string().email("מייל ").required(),
    body: yup.string().matches(/[a-z]+/, 'Is not in correct format').required(),
    // body: yup.string().required(),
}).required();

export default function App({ userId, addPost, post }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        values: post
    });
    const onSubmit = (data) => {
        console.log(data);
        if (post) {
            axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
                .then(x => {
                    console.log(x.data)
                    addPost(x.data)
                })
                .catch(err => console.log(err))
        }
        else {

            data.userId = userId;
            axios.post("https://jsonplaceholder.typicode.com/posts", data)
                .then(x => {
                    console.log(x.data)
                    addPost(x.data)

                })
                .catch(err => console.log(err))
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>כותרת</label>
            <input {...register("title")} />
            <p>{errors.title?.message}</p>
            <label>תוכן</label>
            <input {...register("body")} />
            <p>{errors.body?.message}</p>

            <input type="submit" value={post ? "עדכן" : "הוסף"} />
        </form>
    );
}