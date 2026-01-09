import Link from "next/link";

const PageBreadcrumb = ({className, crumbs, activePath }) => {
  return (
    <div className={`${className} flex flex-wrap items-center gap-3 mb-4`}>
      
      <nav>
        <ol className="flex items-center gap-1.5">
          {crumbs.map((crumb, index) => (
            <li>
              <Link
                className={`inline-flex items-center gap-1.5 text-sm text-black ${activePath === crumb.key ? "font-bold text-primary" : ""}`}
                href={crumb.href}
              >
                {crumb.title}
                {index < crumbs.length - 1 && (
                  <svg
                    className="stroke-current"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                      stroke=""
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            </li>
          ))}
          {/* <li>
            <a
              className="inline-flex items-center gap-1.5 text-sm text-black "
              href="/"
            >
              Home
              <svg
                className="stroke-current"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                  stroke=""
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
          <li className="text-sm text-black ">
            {pageTitle}
          </li> */}
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;
