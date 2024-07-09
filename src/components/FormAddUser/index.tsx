import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

const roles = [
  { value: "1", label: "Admin" },
  { value: "2", label: "Editor" },
  { value: "3", label: "User" },
];

import { Input } from "../../ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/Select";
import { Button } from "@radix-ui/themes";
import SingleImageUpload from "../../ui/ImageUpload";

const addNewUserSchema = yup.object({
  email: yup.string().email().required("Vui lòng nhập email"),
  //   password: yup.string().required("Vui lòng nhập mật khẩu"),
  // i want to requied password have least 8 character
  password: yup.string().min(8).required("Vui lòng nhập mật khẩu"),
  // i want to requied password retype have to same password
  passwordRetype: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  phoneNumber: yup.string().required("Vui lòng nhập số điện thoại"),
  firstName: yup.string().required("Vui lòng nhập họ và tên đệm"),
  lastName: yup.string().required("Vui lòng nhập tên"),
  //   role: yup.tuple().required("Vui lòng chọn quyền"),
  role: yup.number().required("Vui lòng chọn quyền"),
  avatar: yup.mixed().nullable(),
});

export interface SubmitValue {
  [key: string]: string | number;
}

type FormAddUserProps = {
  afterSave?: () => void;
};

const FormAddUser = ({ afterSave }: FormAddUserProps) => {
  const form = useForm({
    resolver: yupResolver(addNewUserSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordRetype: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      role: 1,
      avatar: null,
    },
  });
  const onSubmit: SubmitHandler<SubmitValue> = (data) => {
    console.log("data", data);
  };

  // const onError: SubmitErrorHandler<SubmitValue> = (errors) => {
  //   console.log("error", errors);
  // };

  return (
    <>
      <div className="mx-auto ">
        <Form {...form}>
          <form className="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-4">
              <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 pr-1 border-r-1">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-2 mb-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="tranminhhuyen@gmail.com"
                            autoFocus
                            className="w-full !border-1 focus-visible:!ring-transparent focus-visible:!ring-offset-0 pl-12 pr-4 !py-2 "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value?.toString()}
                          defaultValue={field.value.toString()}
                        >
                          <FormControl>
                            <SelectTrigger className="border-2 border-solid border-[#e4ebe4] text-[#001e00] text-sm leading-[22px] transition-[border-color] no-underline">
                              <SelectValue placeholder="Viet Nam" />
                            </SelectTrigger>
                          </FormControl>
                          <FormMessage />
                          <SelectContent className="border-2 bg-blue-400 border-solid border-[#e4ebe4] text-[#001e00] font-bold text-md leading-[22px] transition-[border-color] no-underline">
                            {roles.map((role) => (
                              <SelectItem key={role.value} value={role.value}>
                                {role.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <Input
                            autoFocus
                            type=""
                            className="w-full !border-1 focus-visible:!ring-transparent focus-visible:!ring-offset-0 pl-12 pr-4 !py-2 "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-2 mb-3">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input
                            autoFocus
                            //   ref={passwordRef}
                            type=""
                            className="w-full !border-1 focus-visible:!ring-transparent focus-visible:!ring-offset-0 pl-12 pr-4 !py-2 "
                            //   onKeyDown={(e) => {
                            //     if (e.key === "Enter" || e.keyCode === 13) {
                            //     //   passwordRef.current?.value &&
                            //       handleCheckPass(passwordRef.current?.value || '');
                            //     }
                            //   }}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            // placeholder="tranminhhuyen@gmail.com"
                            autoFocus
                            //   ref={passwordRef}
                            className="w-full !border-1 focus-visible:!ring-transparent focus-visible:!ring-offset-0 pl-12 pr-4 !py-2 "
                           
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 gap-x-2 mb-3">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            autoFocus
                            //   ref={passwordRef}
                            type="password"
                            className="w-full !border-1 focus-visible:!ring-transparent focus-visible:!ring-offset-0 pl-12 pr-4 !py-2 "
                            //   onKeyDown={(e) => {
                            //     if (e.key === "Enter" || e.keyCode === 13) {
                            //     //   passwordRef.current?.value &&
                            //       handleCheckPass(passwordRef.current?.value || '');
                            //     }
                            //   }}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 gap-x-2 mb-3">
                  <FormField
                    control={form.control}
                    name="passwordRetype"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password retype</FormLabel>
                        <FormControl>
                          <Input
                            autoFocus
                            //   ref={passwordRef}
                            type="password"
                            className="w-full !border-1 focus-visible:!ring-transparent focus-visible:!ring-offset-0 pl-12 pr-4 !py-2 "
                            //   onKeyDown={(e) => {
                            //     if (e.key === "Enter" || e.keyCode === 13) {
                            //     //   passwordRef.current?.value &&
                            //       handleCheckPass(passwordRef.current?.value || '');
                            //     }
                            //   }}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=" mt-6 flex gap-x-4 items-center justify-center">
                  <Button
                    type="submit"
                    className="w-32 h-10 bg-blue-500 cursor-pointer text-white rounded-md"
                  >
                    Add User
                  </Button>
                  <Button
                    type="button"
                    onClick={afterSave}
                    className="w-32 h-10 cursor-pointer  transition-all bg-gray-200 text-gray-500 rounded-md"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
              <div className="col-span-1">
                <FormField
                  control={form.control}
                  name="avatar"
                  render={({ field }) => {
                    return (
                      <FormItem className="mb-6">
                        <FormLabel>Upload avatar</FormLabel>
                        <SingleImageUpload
                          defaultImageSrc={field.value as any}
                          onFileUpload={(file) => {
                            form.setValue("avatar", file);
                          }}
                          onDeleteImage={() => {
                            form.setValue("avatar", null);
                          }}
                        />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default FormAddUser;
