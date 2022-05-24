import styles from "./AddButton.module.css"

const AddButton = () => {
    return (
        <button className={styles['add-button']} type="submit">Add User</button>
    )
}
export default AddButton