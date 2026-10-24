import { useForm } from "react-hook-form";
import { useFieldArray } from "react-hook-form";

export default function StudentsForm() {
  const {
    control,
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      students: [{ name: "" }],
    },
  });

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "students",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input/>

      {fields.map((field, index) => (
        <div key={field.id}>

          <input
            {...register(`students.${index}.name`)}
            placeholder="Student name"
          />

          <button
            type="button"
            onClick={() => remove(index)}
          >
            Remove
          </button>

        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ name: "" })}
      >
        Add Student
      </button>

      <button type="submit">
        Submit
      </button>

    </form>
  );
}