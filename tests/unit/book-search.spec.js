import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import BookSearch from "@/components/BookSearch.vue";

describe("BookSearch.vue", () => {
  it("renders a vue instance", () => {
    expect(shallowMount(BookSearch).isVueInstance()).to.equal(true);
  });
});
