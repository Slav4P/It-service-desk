import { Ticket } from '../../models/ticket';

export type TicketFilter = 'all' | 'open' | 'new';

export function filterTickets(
  items: readonly Ticket[],
  mode: TicketFilter,
): Ticket[] {
  // TODO(LR1-03): all — все; open — всё, кроме closed; new — только new.
  if (!items || items.length === 0) {
    return [];
  }

  if (mode === 'all') {
    return [...items];
  }

  if (mode === 'open') {
    return items.filter(item => item.status !== 'closed');
  }

  if (mode === 'new') {
    return items.filter(item => item.status === 'new');
  }

  return [];
}
