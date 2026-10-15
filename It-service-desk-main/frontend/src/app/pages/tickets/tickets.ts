import { Component, computed, signal } from '@angular/core';
import { DEMO_TICKETS } from '../../data/demo-tickets';
import { TicketStatus } from '../../models/ticket';
import { filterTickets, TicketFilter } from '../../features/tickets/filter-tickets';

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  readonly tickets = signal(DEMO_TICKETS);
  readonly filter = signal<TicketFilter>('all');
  // Соединение состояния с чистой функцией уже подготовлено.
  readonly statusLabels: Record<TicketStatus, string> = {
    new: 'Новая', in_progress: 'В работе', closed: 'Закрыта',
  };

  searchQuery = signal<string>('');

  visibleTickets = computed(() => {
    const statusFiltered = filterTickets(this.tickets(), this.filter());

    const query = this.searchQuery().trim().toLowerCase();

    if (!query) {
      return statusFiltered;
    }

    return statusFiltered.filter(ticket => ticket.title.toLowerCase().includes(query));

  });

  setFilter(mode: TicketFilter): void {
    // TODO(LR1-04): сохраните выбранный режим в сигнале filter.
    this.filter.set(mode);
  }

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
}
