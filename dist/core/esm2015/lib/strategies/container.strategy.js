export class ContainerStrategy {
    constructor(containerRef) {
        this.containerRef = containerRef;
    }
    prepare() { }
}
export class ClearContainerStrategy extends ContainerStrategy {
    getIndex() {
        return 0;
    }
    prepare() {
        this.containerRef.clear();
    }
}
export class InsertIntoContainerStrategy extends ContainerStrategy {
    constructor(containerRef, index) {
        super(containerRef);
        this.index = index;
    }
    getIndex() {
        return Math.min(Math.max(0, this.index), this.containerRef.length);
    }
}
export const CONTAINER_STRATEGY = {
    Clear(containerRef) {
        return new ClearContainerStrategy(containerRef);
    },
    Append(containerRef) {
        return new InsertIntoContainerStrategy(containerRef, containerRef.length);
    },
    Prepend(containerRef) {
        return new InsertIntoContainerStrategy(containerRef, 0);
    },
    Insert(containerRef, index) {
        return new InsertIntoContainerStrategy(containerRef, index);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3N0cmF0ZWdpZXMvY29udGFpbmVyLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBZ0IsaUJBQWlCO0lBQ3JDLFlBQW1CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtJQUFHLENBQUM7SUFJckQsT0FBTyxLQUFVLENBQUM7Q0FDbkI7QUFFRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsaUJBQWlCO0lBQzNELFFBQVE7UUFDTixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsaUJBQWlCO0lBQ2hFLFlBQVksWUFBOEIsRUFBVSxLQUFhO1FBQy9ELEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUQ4QixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBRWpFLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHO0lBQ2hDLEtBQUssQ0FBQyxZQUE4QjtRQUNsQyxPQUFPLElBQUksc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUE4QjtRQUNuQyxPQUFPLElBQUksMkJBQTJCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsT0FBTyxDQUFDLFlBQThCO1FBQ3BDLE9BQU8sSUFBSSwyQkFBMkIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUE4QixFQUFFLEtBQWE7UUFDbEQsT0FBTyxJQUFJLDJCQUEyQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250YWluZXJTdHJhdGVneSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cclxuXHJcbiAgYWJzdHJhY3QgZ2V0SW5kZXgoKTogbnVtYmVyO1xyXG5cclxuICBwcmVwYXJlKCk6IHZvaWQge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsZWFyQ29udGFpbmVyU3RyYXRlZ3kgZXh0ZW5kcyBDb250YWluZXJTdHJhdGVneSB7XHJcbiAgZ2V0SW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZSgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyUmVmLmNsZWFyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zZXJ0SW50b0NvbnRhaW5lclN0cmF0ZWd5IGV4dGVuZHMgQ29udGFpbmVyU3RyYXRlZ3kge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihjb250YWluZXJSZWYpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXgoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoMCwgdGhpcy5pbmRleCksIHRoaXMuY29udGFpbmVyUmVmLmxlbmd0aCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX1NUUkFURUdZID0ge1xyXG4gIENsZWFyKGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgcmV0dXJuIG5ldyBDbGVhckNvbnRhaW5lclN0cmF0ZWd5KGNvbnRhaW5lclJlZik7XHJcbiAgfSxcclxuICBBcHBlbmQoY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICByZXR1cm4gbmV3IEluc2VydEludG9Db250YWluZXJTdHJhdGVneShjb250YWluZXJSZWYsIGNvbnRhaW5lclJlZi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgUHJlcGVuZChjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHJldHVybiBuZXcgSW5zZXJ0SW50b0NvbnRhaW5lclN0cmF0ZWd5KGNvbnRhaW5lclJlZiwgMCk7XHJcbiAgfSxcclxuICBJbnNlcnQoY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IEluc2VydEludG9Db250YWluZXJTdHJhdGVneShjb250YWluZXJSZWYsIGluZGV4KTtcclxuICB9LFxyXG59O1xyXG4iXX0=