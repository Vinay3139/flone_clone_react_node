import { SubmitButton } from "../../util/button/submitButton";
import { InputPassword } from "../../util/form/inputPassword";
import InputText from "../../util/form/inputText";

export const LoginForm = () => {
  return (
    <>
      <form>
        <div className="p-3">
          <InputText
            placeholder="UserName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="p-3">
          <InputPassword
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="p-3">
          <SubmitButton
            text="LOGIN"
            className="w-full py-2 mt-6 text-white bg-purple-500 rounded-md hover:bg-purple-600"
          />
        </div>
      </form>
    </>
  );
};
