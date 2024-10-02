"use client";
import { useFormik } from "formik";
import * as yup from "yup";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Name Required.")
        .min(3, "Minimum 3 letter")
        .max(100, "Maximum 100 letter"),
      email: yup
        .string()
        .required("Email Required.")
        .email("Enter valid email"),
      message: yup
        .string()
        .required("Message Required.")
        .min(15, "Minimum 15 letter")
        .max(100, "Maximum 100 letter"),
    }),
    onSubmit: async (values) => {
      console.log({ values });

      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex lg:flex-row flex-col lg:gap-5">
        <div className=" w-full mt-4">
          <label className="mb-2 block text-sm font-semibold text-secondary ">
            Name*
          </label>

          <input
            className={`block w-full rounded-md border  px-4 py-2 text-gray-700 focus:border-blue-100 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 lg:w-full ${
              formik.touched.name && Boolean(formik.errors.name)
                ? "dark:border-red-600"
                : "dark:border-gray-400"
            } `}
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Jane Doe"
          />
          <span className="text-xs font-extralight text-red-600">
            {formik.touched.name && formik.errors.name}
          </span>
        </div>

        <div className="mt-4  w-full">
          <label className="mb-2 block text-sm font-semibold text-secondary ">
            E-mail*
          </label>

          <input
            className={`block w-full rounded-md border  px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  ${
              formik.touched.email && Boolean(formik.errors.email)
                ? "dark:border-red-600"
                : "dark:border-gray-400"
            }`}
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="jane.doe@example.com"
          />
          <span className="text-xs font-light text-red-600">
            {formik.touched.email && formik.errors.email}
          </span>
        </div>
      </div>

      <div className="mt-4 w-full">
        <label className="mb-2 block text-sm font-semibold text-secondary">
          Message*
        </label>

        <textarea
          className={`block h-32 w-full rounded-md border  px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
            formik.touched.message && Boolean(formik.errors.message)
              ? "dark:border-red-600"
              : "dark:border-gray-400"
          }`}
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          placeholder="Write Your Message...."
        ></textarea>
        <span className="text-xs font-light text-red-600">
          {formik.touched.message && formik.errors.message}
        </span>
      </div>

      <div className="my-6">
        <button
          className=" bg-primary btn whitespace-nowrap common-transition rounded-md"
          type="submit"
          disabled={formik.isSubmitting}
        >
          <p className="text-black">Send Message</p>
        </button>
      </div>
    </form>
  );
}
