export type ReadCommentDto = {
    id: number,
    created: string,
    content: string,
    issueId: number
  }

export type CreateCommentDto = {
    name: string,
    deadline: string,
    status: string,
    description: string,
    isComplete: boolean
  }