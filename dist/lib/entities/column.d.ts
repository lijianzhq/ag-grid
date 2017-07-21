// Type definitions for ag-grid v12.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { ColumnGroupChild } from "./columnGroupChild";
import { OriginalColumnGroupChild } from "./originalColumnGroupChild";
import { ColDef, AbstractColDef, IAggFunc } from "./colDef";
import { RowNode } from "./rowNode";
import { ICellRendererFunc, ICellRendererComp } from "../rendering/cellRenderers/iCellRenderer";
import { ICellEditorComp } from "../rendering/cellEditors/iCellEditor";
import { IFilter } from "../interfaces/iFilter";
import { IEventEmitter } from "../interfaces/iEventEmitter";
export declare class Column implements ColumnGroupChild, OriginalColumnGroupChild, IEventEmitter {
    static EVENT_MOVING_CHANGED: string;
    static EVENT_LEFT_CHANGED: string;
    static EVENT_WIDTH_CHANGED: string;
    static EVENT_LAST_LEFT_PINNED_CHANGED: string;
    static EVENT_FIRST_RIGHT_PINNED_CHANGED: string;
    static EVENT_VISIBLE_CHANGED: string;
    static EVENT_FILTER_CHANGED: string;
    static EVENT_FILTER_ACTIVE_CHANGED: string;
    static EVENT_SORT_CHANGED: string;
    static EVENT_MENU_VISIBLE_CHANGED: string;
    static EVENT_ROW_GROUP_CHANGED: string;
    static EVENT_PIVOT_CHANGED: string;
    static EVENT_VALUE_CHANGED: string;
    static PINNED_RIGHT: string;
    static PINNED_LEFT: string;
    static SORT_ASC: string;
    static SORT_DESC: string;
    private gridOptionsWrapper;
    private columnUtils;
    private frameworkFactory;
    private colDef;
    private colId;
    private actualWidth;
    private visible;
    private pinned;
    private left;
    private oldLeft;
    private aggFunc;
    private sort;
    private sortedAt;
    private moving;
    private menuVisible;
    private lastLeftPinned;
    private firstRightPinned;
    private minWidth;
    private maxWidth;
    private filterActive;
    private eventService;
    private fieldContainsDots;
    private tooltipFieldContainsDots;
    private rowGroupActive;
    private pivotActive;
    private aggregationActive;
    private primary;
    private cellRenderer;
    private floatingCellRenderer;
    private cellEditor;
    private filter;
    private parent;
    constructor(colDef: ColDef, colId: String, primary: boolean);
    setParent(parent: ColumnGroupChild): void;
    getParent(): ColumnGroupChild;
    initialise(): void;
    isEmptyGroup(): boolean;
    isRowGroupDisplayed(colId: string): boolean;
    getCellRenderer(): {
        new (): ICellRendererComp;
    } | ICellRendererFunc | string;
    getCellEditor(): {
        new (): ICellEditorComp;
    } | string;
    getFloatingCellRenderer(): {
        new (): ICellRendererComp;
    } | ICellRendererFunc | string;
    getFilter(): {
        new (): IFilter;
    } | string;
    getUniqueId(): string;
    isPrimary(): boolean;
    isFilterAllowed(): boolean;
    isFieldContainsDots(): boolean;
    isTooltipFieldContainsDots(): boolean;
    private validate();
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    private createIsColumnFuncParams(rowNode);
    isSuppressNavigable(rowNode: RowNode): boolean;
    isCellEditable(rowNode: RowNode): boolean;
    isSuppressPaste(rowNode: RowNode): boolean;
    isResizable(): boolean;
    private isColumnFunc(rowNode, value);
    setMoving(moving: boolean): void;
    isMoving(): boolean;
    getSort(): string;
    setSort(sort: string): void;
    setMenuVisible(visible: boolean): void;
    isMenuVisible(): boolean;
    isSortAscending(): boolean;
    isSortDescending(): boolean;
    isSortNone(): boolean;
    isSorting(): boolean;
    getSortedAt(): number;
    setSortedAt(sortedAt: number): void;
    setAggFunc(aggFunc: string | IAggFunc): void;
    getAggFunc(): string | IAggFunc;
    getLeft(): number;
    getOldLeft(): number;
    getRight(): number;
    setLeft(left: number): void;
    isFilterActive(): boolean;
    setFilterActive(active: boolean): void;
    setPinned(pinned: string | boolean): void;
    setFirstRightPinned(firstRightPinned: boolean): void;
    setLastLeftPinned(lastLeftPinned: boolean): void;
    isFirstRightPinned(): boolean;
    isLastLeftPinned(): boolean;
    isPinned(): boolean;
    isPinnedLeft(): boolean;
    isPinnedRight(): boolean;
    getPinned(): string;
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    getColDef(): ColDef;
    getColumnGroupShow(): string;
    getColId(): string;
    getId(): string;
    getDefinition(): AbstractColDef;
    getActualWidth(): number;
    getColSpan(rowNode: RowNode): number;
    setActualWidth(actualWidth: number): void;
    isGreaterThanMax(width: number): boolean;
    getMinWidth(): number;
    getMaxWidth(): number;
    setMinimum(): void;
    setRowGroupActive(rowGroup: boolean): void;
    isRowGroupActive(): boolean;
    setPivotActive(pivot: boolean): void;
    isPivotActive(): boolean;
    isAnyFunctionActive(): boolean;
    isAnyFunctionAllowed(): boolean;
    setValueActive(value: boolean): void;
    isValueActive(): boolean;
    isAllowPivot(): boolean;
    isAllowValue(): boolean;
    isAllowRowGroup(): boolean;
    getMenuTabs(defaultValues: string[]): string[];
}