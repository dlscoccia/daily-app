import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Test from './Test'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Test />)

    const heading = screen.getByRole('heading', {
      name: /aja/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders homepage unchanged', () => {
    const { container } = render(<Test />)
    expect(container).toMatchSnapshot()
  })
})
