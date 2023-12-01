import { sortByDate } from "@lib/utils/sortFunctions";
import Link from "next/link";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

const InnerPagination = ({ posts, date }) => {
  const orderedPosts = sortByDate(posts);
  const lastIndex = orderedPosts.length - 1;
  const postIndex = orderedPosts.findIndex(
    (post) => post.frontmatter.date == date
  );
  const next = postIndex == 0 ? undefined : orderedPosts[postIndex - 1].slug;
  const prev =
    postIndex == lastIndex ? undefined : orderedPosts[postIndex + 1].slug;
  const prevButton = prev && (
    <Link href={prev} className={"btn btn-primary text-3xl font-bold"}>
      <BsArrowLeftShort />
    </Link>
  );
  const nextButton = next && (
    <Link href={next} className={"btn btn-primary text-3xl font-bold"}>
      <BsArrowRightShort />
    </Link>
  );

  return (
    <div className="row">
      <span className="col">{prevButton}</span>
      <span className="col-8" />
      <span className="col">{nextButton}</span>
    </div>
  );
};

export default InnerPagination;
