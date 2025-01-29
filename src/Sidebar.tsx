import { FileText, Search } from "lucide-react";

interface SearchResult {
  Document_Title: string;
  Answer: string;
  URL: string;
}

interface SidebarData {
  SearchResults?: SearchResult[];  // Optional, since data might be in HumanizedContent format
  HumanizedContent?: SearchResult; // Optional, alternate format
}

interface SidebarProps {
  data: SidebarData;
}

// Badge Component
const Badge = ({ priority }: { priority: "high" | "medium" }) => {
  return (
    <span
      className={`px-2 py-0.5 text-xs font-medium rounded-full ${
        priority === "high"
          ? "bg-gray-900 text-white"
          : "bg-gray-200 text-gray-600"
      }`}
    >
      {priority}
    </span>
  );
};

// DocumentCard Component
const DocumentCard = ({
  title,
  answer,
  type = "DOCUMENT",
  priority = "high",
  url,
}: {
  title: string;
  answer: string;
  type?: string;
  priority?: "high" | "medium";
  url: string;
}) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">{type}</span>
            </div>
          </div>
        </div>
        <Badge priority={priority} />
      </div>

      {/* Answer Section */}
      <p className="text-sm text-gray-700 mt-2">{answer}</p>

      {/* Document Link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 hover:text-blue-800 hover:underline mt-2 inline-block"
      >
        View Document ↗
      </a>
    </div>
  );
};

// Sidebar Component
export const Sidebar = ({ data }: SidebarProps) => {
  // Normalize data: If `HumanizedContent` exists, convert it into an array for uniform processing
  const normalizedResults = data?.SearchResults
    ? data.SearchResults
    : data?.HumanizedContent
    ? [data.HumanizedContent]
    : [];

  return (
    <div className="w-200 border-l border-gray-200 bg-gray-50 h-screen overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Search className="w-5 h-5 text-gray-500" />
          <h2 className="text-xl font-semibold text-gray-900">
            Relevant Information
          </h2>
        </div>

        {/* Show message if no results found */}
        {normalizedResults.length > 0 ? (
          <div className="space-y-4">
            {normalizedResults.map((result, index) => (
              <DocumentCard
                key={index}
                title={result.Document_Title}
                answer={result.Answer}
                url={result.URL}
                priority={index < 2 ? "high" : "medium"}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No relevant documents found.</p>
        )}
      </div>
    </div>
  );
};
