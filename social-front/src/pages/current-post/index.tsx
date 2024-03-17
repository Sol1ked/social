import React from "react"
import { useParams } from "react-router-dom"
import { useGetPostByIdQuery } from "../../app/services/postsApi"
import { Card } from "../../components/card"
import { GoBack } from "../../components/go-back"
import { CreateComment } from "../../components/creacte-comment"

export const CurrentPost = () => {
  const params = useParams<{ id: string }>()
  const { data } = useGetPostByIdQuery(params?.id ?? "")

  if (!data) {
    return <h2>Поста не существует</h2>
  }

  const {
    content,
    id,
    authorId,
    comments,
    likes,
    author,
    likedByUser,
    createdAt,
  } = data

  return (
    <>
      <GoBack />
      <Card
        id={id}
        avatarUrl={author.avatarUrl ?? ""}
        name={author.name ?? ""}
        authorId={authorId}
        content={content}
        cardFor={"current-post"}
        likesCount={likes.length}
        commentsCount={comments.length}
        likedByUser={likedByUser}
        createdAt={createdAt}
      />
      <div className="mt-10">
        <CreateComment />
      </div>
      <div className="mt-10">
        {data.comments
          ? data.comments.map(comment => (
              <Card
                id={id}
                key={comment.id}
                cardFor={"comment"}
                avatarUrl={comment.user.avatarUrl ?? ""}
                name={comment.user.name ?? ""}
                content={comment.content}
                authorId={comment.userId}
                commentId={comment.id}
              />
            ))
          : null}
      </div>
    </>
  )
}
