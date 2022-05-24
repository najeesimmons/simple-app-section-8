import AddButton from "./UI/AddButton";
import styles from "./InputForm.module.css";

const InputForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles['form-wrapper']}>
        <div className={styles['field-container']}>
          <label>Username</label>
          <input />
        </div>
        <div className={styles['field-container']}>
          <label>Age (Years)</label>
          <input />
        </div>
        <AddButton></AddButton>
      </form>
    </div>
  );
};

export default InputForm;
