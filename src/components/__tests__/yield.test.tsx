/* eslint-disable @typescript-eslint/no-redeclare */
import {
  render,
  screen,
  within,
  fireEvent,
} from '@testing-library/react'
import App from '../App/App'

describe('Yield view is render correctly', () => {
  test('renders tabs', () => {
    render(<App />)
    const linkElement = screen.queryByText('Rendement')
    expect(linkElement).toBeInTheDocument()
  })

  test('raw yield accordion is open on first render', () => {
    render(<App />)
    const button = screen.getByRole('button', {
      name: /données rendement brut/i,
    })
    expect(within(button).queryByTestId('ExpandMoreIcon')).toBeInTheDocument()
  })

  test('cash flow tab to be disabled on first render', () => {
    render(<App />)
    const cashFlowTab = screen.getByRole('tab', {
      name: /cash flow/i,
    })
    expect(cashFlowTab).toHaveAttribute('disabled')
  })

  test('cash flow tab to not be disabled if buyPrice and rent are filled', () => {
    render(<App />)
    const buyPriceInput = screen.getByRole('spinbutton', {
      name: /prix du bien/i,
    })
    const rentInput = screen.getByRole('spinbutton', {
      name: /loyer mensuel ht/i,
    })
    fireEvent.change(buyPriceInput, { target: { value: '100' } })
    fireEvent.change(rentInput, { target: { value: '100' } })
    const cashFlowTab = screen.getByRole('tab', {
      name: /cash flow/i,
    })
    expect(cashFlowTab).not.toHaveAttribute('disabled')
  })

  test('yield calculation are ok', () => {
    render(<App />)
    const buyPriceInput = screen.getByRole('spinbutton', {
      name: /prix du bien/i,
    })
    const rentInput = screen.getByRole('spinbutton', {
      name: /loyer mensuel ht/i,
    })
    fireEvent.change(buyPriceInput, { target: { value: '40000' } })
    fireEvent.change(rentInput, { target: { value: '300' } })
    screen.getByText('Données rendement net').click()
    const chargesInput = screen.getByRole('spinbutton', {
      name: /charges annuelles non récupérables/i,
    })

    fireEvent.change(chargesInput, { target: { value: '500' } })

    expect(screen.getByText(/9%/i)).toBeInTheDocument()
    expect(screen.getByText(/7.75%/i)).toBeInTheDocument()
    expect(screen.getByText(/5.63%/i)).toBeInTheDocument()
  })
})
