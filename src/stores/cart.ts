import { defineStore } from 'pinia'
import type { CartDetail,Product } from '@/model/types';
import { useLocalStorage } from '@vueuse/core'
import { encode } from 'punycode';

export const useCartStore = defineStore('cart', {
  state: () => ({ 
    details: useLocalStorage<CartDetail[]>('cartDetails',[])
  }),
  getters: {
    cartItemsCount: (state) => {
      let count = 0;
      state.details.forEach(detail => {
        count += detail.quantity;
      });
      return count;
    },
    totalAmout: (state) =>{
      let sum = 0;
      state.details.forEach(d=>{
        sum += d.product.price * d.quantity
      });
      return sum;
    },
    whatsAppMessage(state){
      let message = 'Hola, quiero realizar la siguiente compra:\n\n'
      message += `------------------------------\n`;
      state.details.forEach(d=>{
        message += `Producto: ${d.product.name}\n`;
        message += `Cantidad: ${d.quantity}\n`;
        message += `Subtotal: $${d.quantity * d.product.price}\n`;
        message += `------------------------------\n`;
      })
      message += `\nTotal a pagar: $${this.totalAmout}\n\n`
      message += `¡Muchas gracias!👌`
      return encodeURI(message);
    },
    whatsAppLink(){
      return 'https://api.whatsapp.com/send/?phone=573015677412&text='+this.whatsAppMessage;
    }
  },
  actions: {
    addProduct(product: Product) {
      const detailFound = this.details.find(d => d.product.id === product.id);

      if(detailFound){
          detailFound.quantity++
      }else{
          this.details.push({
              product,
              quantity: 1
          });
      }
    },
    deleteProduct(productId: number){
      const index = this.details.findIndex(d => d.product.id === productId);
      this.details.splice(index,1);
    },
    increment(productId: number){
      const detailFound = this.details.find(d => d.product.id === productId);
      if(detailFound){
        detailFound.quantity++
      }
    },
    decrement(productId: number){
      const detailFound = this.details.find(d => d.product.id === productId);
      if(detailFound){
        detailFound.quantity--
        if(detailFound.quantity === 0){
          this.deleteProduct(productId)
        }
      }
    }
  },
})