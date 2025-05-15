import CardList from "@/components/CardList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/user">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
          <div className="bg-primary-foreground p-4 rounded-lg">info</div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
