import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalnceBox from "@/components/TotalBalnceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Oscar",
    lastName: "Avelar",
    email: "avelarclaros@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalnceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
};

export default Home;
