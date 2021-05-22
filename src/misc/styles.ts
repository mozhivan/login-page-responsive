import { createUseStyles } from 'react-jss'
import { Theme } from 'misc/theme'


export const useCommonStyles = createUseStyles((theme: Theme) => ({
  rowStart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  columnStart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))
