import React from "react";
import LeaveComment from "./LeaveComment";
import { FormatTime } from "@/utils/helpers";
import Image from "next/image";

type comment = {
  authorDetails: {
    Addres: string;
    Cart: [];
    createdAt: string;
    email: string;
    id: string;
    image: string;
    name: string;
    password: string;
    role: string;
    userName: string;
  };
  commentDetail: {
    authorEmail: string;
    content: string;
    createdAt: string;
    id: string;
    productId: string;
    updatedAt: string;
  };
};

const Comments = ({ comments }:{comments:comment[]} ) => {

  return (
    <div className=" antialiased  max-w-screen-sm">
      <LeaveComment />
      <div className="mt-5 space-y-4">
        {comments &&
          comments.map((comment: comment) => {
            return (
              <div className="flex" key={comment.commentDetail.id}>
                <div className="flex-shrink-0 mr-3">
                  <Image
                    className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                    src={
                      comment.authorDetails.image
                        ? comment.authorDetails.image
                        : "/pic/avatar.png"
                    }
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <div className="flex items-center justify-between">
                    <div>
                      <strong>{comment.authorDetails.name}</strong>{" "}
                      <span className="text-xs text-gray-400">
                        {FormatTime(comment.commentDetail.createdAt)}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm">{comment.commentDetail.content}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
