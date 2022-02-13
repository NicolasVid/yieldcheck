// eslint-disable-next-line @typescript-eslint/no-redeclare
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App/App'

describe('CashFlow view is render correctly', () => {
  test('cashflow calculation are ok', async () => {
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
    screen
      .getByRole('tab', {
        name: /cash flow/i,
      })
      .click()
    await waitFor(() =>
      expect(
        screen.getByRole('spinbutton', {
          name: /apport/i,
        })
      ).toBeInTheDocument()
    )
    const contributionInput = screen.getByRole('spinbutton', {
      name: /apport/i,
    })
    const loanTimeInput = screen.getByRole('spinbutton', {
      name: /durée du prêt \(en années\)/i,
    })

    const interestRateInput = screen.getByRole('spinbutton', {
      name: /taux d'intêret \(en %\)/i,
    })
    const assuranceRateInput = screen.getByRole('spinbutton', {
      name: /taux d'assurance \(en %\)/i,
    })
    fireEvent.change(contributionInput, { target: { value: '7500' } })
    fireEvent.change(loanTimeInput, { target: { value: '20' } })
    fireEvent.change(interestRateInput, { target: { value: '1.16' } })
    fireEvent.change(assuranceRateInput, { target: { value: '0.34' } })

    expect(screen.getByText(/157/i)).toBeInTheDocument()
    expect(screen.getByText(/31/i)).toBeInTheDocument()
  })
})
