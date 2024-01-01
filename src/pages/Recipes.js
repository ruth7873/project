import { useState, useEffect } from 'react'
import Image from '../images/img.jpg'
import axios from 'axios'
import Recipe from '../Recipe';
import { useSelector } from "react-redux/es/hooks/useSelector"
import AddRecipe from './AddRecipe'

export default (byUser) => {
    const [Categories, setCategories] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [IfbyUser, setIfByUser] = useState(byUser ? true : false);
    const [myRecipes, setMyRecipes] = useState([]);
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        console.log(user);
        console.log("byUser", byUser);
        if (byUser) {
            axios.get('http://localhost:8080/api/recipe').then((r) => { setRecipes(r.data); })
            console.log(recipes)
        }
        else {
            axios.get('http://localhost:8080/api/recipe').then((r) => { setRecipes(r.data.filter((x) => x.UserId == user?.Id)) })
            console.log(recipes)
        }
        axios.get('http://localhost:8080/api/category').then((c) => { setCategories(c.data) })
    }, [])
    const handleCategoryChange = (event) => {
        // הפעולה הזו תתבצע כאשר משתמש בוחר אפשרות בתיבת הבחירה
        const selectedCategoryId = event.target.value;
        setSelectedCategory(selectedCategoryId);
        // ניתן להוסיף פעולות נוספות כאן לפי הצורך
    };
    const handleDurationChange = (event) => {
        const selectedDuration = event.target.value;
        setSelectedDuration(selectedDuration);
    };
    function checkDuration(recipe_duration) {
        switch (selectedDuration) {
            case "60":
                return (recipe_duration >= 60);
            case "45":
                return (recipe_duration >= 45 && recipe_duration < 60);
            case "30":
                return (recipe_duration >= 30 && recipe_duration < 45);
            case "15":
                return (recipe_duration >= 0 && recipe_duration < 30);
            default: return false;
        }
    }
    const handleDifficultyChange = (event) => {
        const selectedDifficulty = event.target.value;
        setSelectedDifficulty(selectedDifficulty);
    };
    const sort = () => {
        console.log("sorting")
        setRecipes(recipes.sort((a, b) => a.Name.localeCompare(b.Name)));
        console.log(recipes)
    }
    return (<>

        <img src={Image} style={{ width: 500 }}></img>
        <hr />
      <AddRecipe/>

        <select onChange={handleCategoryChange} value={selectedCategory || ''}>
            {Categories.map((x) =>
                <option key={x.Id} value={x.Id} >{x.Name}</option>)}
        </select>
        <p>Selected Category: {selectedCategory}</p>

        <select onChange={handleDurationChange} value={selectedDuration || ''}>
            <option value={15} >15 minutes</option>
            <option value={30} >30 minutes</option>
            <option value={45} >45 minutes</option>
            <option value={60} >an hour and more</option>
        </select>
        <p>Selected Duration: {selectedDuration}</p>

        <select onChange={handleDifficultyChange} value={selectedDifficulty || ''}>
            <option value={1} >קל</option>
            <option value={2} >בינוני</option>
            <option value={3} >קשה</option>
            <option value={4} >קשה מאד</option>
        </select>
        <p>Selected Difficulty: {selectedDifficulty}</p>

        <button onClick={sort}>sort by alphbetic order</button>
        
        {recipes.map(x => (!selectedCategory || x.CategoryId == selectedCategory) && (!selectedDuration || checkDuration(x.Duration)) && (!selectedDifficulty || selectedDifficulty == x.Difficulty) ?
            <div key={x.Id}>
                <Recipe props={x} />
            </div>
            : null)}

        {myRecipes.map(x => (!selectedCategory || x.CategoryId == selectedCategory) ?
            <div key={x.Id}>
                <Recipe props={x} />
            </div>
            : null)}
    </>);
}
