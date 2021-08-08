import { PrimaryButton } from "./component/atoms/button/PrimaryButton";
import { SecondaryButton } from "./component/atoms/button/SecondaryButton";
import { SearchInput } from "./component/molecules/SearchInput";
import { UserCard } from "./component/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "test",
  image: "https://source.unsplash.com/dQ5G0h7sLno",
  email: "12345@gmail.com",
  phone: "090-0000-11111",
  companry: {
    name: "テスト株式会社"
  },
  websaite: "https://www.google.com/?hl=ja"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
