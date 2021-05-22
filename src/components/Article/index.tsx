import React from 'react'
import { createUseStyles } from 'react-jss'
import { Theme } from 'misc/theme'

import { useCommonStyles } from 'misc/styles'

type Props = {
  title: string
  content: React.ReactNode
}

export const Article = (props: Props) => {
  const { title, content } = props
  const classes = useStyles()
  const { columnStart } = useCommonStyles()

  return (
    <div className={columnStart}>
      <div className={classes.title}>{title}</div>
      <div className={classes.content}>{content}</div>
    </div>
  )
}

const useStyles = createUseStyles((theme: Theme) => ({
  title: {
    fontSize: '13px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: theme.colors.white,
  },
  content: {
    width: '170px',
    height: '76px',
    margin: '13px 0 0',
    fontSize: '13px',
    lineHeight: 1.38,
    color: theme.colors.primary,
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '& > :first-child': {
      paddingBottom: '4px',
    },
  },
}))

