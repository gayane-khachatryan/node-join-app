import {getCard} from "./action.js";

const $ = s => document.querySelector(s);


document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        getCard(e.target.getAttribute('data-tab'));
    })
})
export function renderJoinCards(data) {

    $('#grid').innerHTML = data.map(item => `
        <div class="card">
            <div class="card-top">
                <div>
                    <h3 class="card-title">
                        ${item.name || "Unknown Student"}
                    </h3>
                    <div class="card-sub">
                        Group: ${item.group || "—"}
                    </div>
                </div>
            </div>

            <div class="card-mid">
                <div class="kv">
                    <span>Month</span>
                    <span>${item.month || "—"}</span>
                </div>
                <div class="kv">
                    <span>Amount</span>
                    <span>${item.amount || 0}</span>
                </div>
                <div class="card-actions">
            <div class="price mono">55,000</div>
            <button class="add" data-add="2">Add to cart</button>
          </div>
            </div>
        </div>
    `).join('');
}
