import React from "react";
import { Badge } from "react-bootstrap";

const tags = [
  "Art",
  "Design",
  "Fashion & Wearables",
  "Film",
  "Music",
  "Photography",
  "Other",
];

const PopularTags = () => {
  return (
    <div className="mb-4">
      <h5>Popular Tags</h5>
      <div>
        {tags.map((tag, index) => (
          <Badge key={index} variant="warning" className="mr-2 mb-2">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
