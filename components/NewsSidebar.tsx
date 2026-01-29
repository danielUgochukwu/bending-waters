import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY, TAGS_QUERY } from "@/sanity/lib/queries";
import NewsSidebarClient from "./NewsSidebarClient";

const NewsSidebar = async () => {
    const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });
    const { data: tags } = await sanityFetch({ query: TAGS_QUERY });

    return <NewsSidebarClient categories={categories || []} tags={tags || []} />;
};

export default NewsSidebar;
