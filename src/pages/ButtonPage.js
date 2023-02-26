import Button from "../components/Button";

import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked!");
  };
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Hello
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoCloudDownload />
          Watch Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoCloudDownload />
          Hide Ads!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
