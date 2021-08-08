import { PrimaryButton } from "./component/atoms/button/PrimaryButton";
import { SecondaryButton } from "./component/atoms/button/SecondaryButton";
import { SearchInput } from "./component/molecules/SearchInput";
import { UserCard } from "./component/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}
